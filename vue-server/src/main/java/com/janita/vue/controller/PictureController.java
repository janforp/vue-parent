package com.janita.vue.controller;

import com.janita.vue.bean.Picture;
import com.janita.vue.consts.VueConst;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Janita on 2017-05-23 17:37
 */
@RestController
@RequestMapping("/pic")
public class PictureController {


    @GetMapping("/list")
    public List<Picture> getPictureList(){
        List<Picture> pictures = new ArrayList<>();

        Picture pictureA = new Picture();
        Picture pictureB = new Picture();
        pictureA.setName("科比");
        pictureA.setColor("黄色");
        pictureA.setImg(VueConst.KOBE);

        pictureB.setName("麦迪");
        pictureB.setColor("红色");
        pictureB.setImg(VueConst.MAIDI);

        pictures.add(pictureA);
        pictures.add(pictureB);

        System.out.println("*******" + pictures);

        return pictures;
    }
}
