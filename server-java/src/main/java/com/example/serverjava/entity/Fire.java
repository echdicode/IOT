package com.example.serverjava.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

@Table(name = "fire")
@Entity
public class Fire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "address")
    private String address;

    @Column(name = "fire_center")
    private String fire_center;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "start_at")
    private Date startAt;

    @Column(name = "city")
    private String city;

    @Column(name = "code")
    private String code;

    @Override
    public String toString() {
        return "Fire{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", fire_center='" + fire_center + '\'' +
                ", startAt=" + startAt +
                ", city='" + city + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Date getStartAt() {
        return startAt;
    }

    public void setStartAt(Date startAt) {
        this.startAt = startAt;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getfire_center() {
        return fire_center;
    }

    public void setFire_center(String fire_center) {
        this.fire_center = fire_center;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
