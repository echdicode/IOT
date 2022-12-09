package com.example.serverjava.controller;

import com.example.serverjava.entity.Fire;
import com.example.serverjava.entity.Infoaddress;
import com.example.serverjava.repo.FireRepo;
import com.example.serverjava.repo.InfoaddressRepo;
import okhttp3.Call;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import java.rmi.server.RemoteRef;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class FireController {
    private final FireRepo fireRepo;
    private final InfoaddressRepo infoaddressRepo;
    public FireController(FireRepo fireRepo, InfoaddressRepo infoaddressRepo) {

        this.fireRepo = fireRepo;
        this.infoaddressRepo = infoaddressRepo;
    }
    @PostMapping("/save")
    public ResponseEntity<Fire> creatProduct(@RequestBody Infoaddress res  ){
        try {
            Infoaddress infoaddress = infoaddressRepo.findByCode(res.getCode());
            System.out.println(infoaddress.toString());
            OkHttpClient client = new OkHttpClient();
            String url_map1="https://www.google.com/maps/dir/%s/%s";
            String url_map2= String.format(url_map1,infoaddress.getFireCenter(),infoaddress.getAddress());
            String url_bot1="https://api.telegram.org/bot5531809361/sendMessage?chat_id=&text=%s";
            String url_bot2=String.format(url_bot1,url_map2);
            Request request = new Request.Builder()
                    .url(url_bot2)
                    .build();
            Response response = client.newCall(request).execute();

            Fire _fire = new Fire();
            _fire.setCode(infoaddress.getCode());
            _fire.setAddress(infoaddress.getAddress());
            _fire.setFire_center(infoaddress.getFireCenter());
            Fire fire = fireRepo.save(_fire);
            System.out.println(fire.toString());
            return new ResponseEntity<>(fire,HttpStatus.CREATED);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Fire>> getAll( ){
        try {

            return new ResponseEntity<>(fireRepo.findAll(),HttpStatus.OK);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
