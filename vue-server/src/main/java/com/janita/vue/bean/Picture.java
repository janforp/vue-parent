package com.janita.vue.bean;

import java.io.Serializable;

/**
 * Created by Janita on 2017-05-23 17:37
 */
public class Picture implements Serializable {

    private String name ;

    private String color;

    private String img;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "Picture{" +
                "name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", img='" + img + '\'' +
                '}';
    }
}
