package com.example.serverjava.entity;

import javax.persistence.*;

@Table(name = "infoaddress")
@Entity
public class Infoaddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Override
    public String toString() {
        return "Infoaddress{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", address='" + address + '\'' +
                ", fireCenter='" + fireCenter + '\'' +
                '}';
    }

    @Column(name = "code")
    private String code;

    @Column(name = "address")
    private String address;

    @Column(name = "fire_center")
    private String fireCenter;

    public String getFireCenter() {
        return fireCenter;
    }

    public void setFireCenter(String fireCenter) {
        this.fireCenter = fireCenter;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
