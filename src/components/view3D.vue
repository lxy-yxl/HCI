<template>
  <div id="viewer"></div>
</template>
<script>
import {Viewer} from "photo-sphere-viewer";
import {MarkersPlugin} from "photo-sphere-viewer/dist/plugins/markers"; //Markers插件
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import "photo-sphere-viewer/dist/plugins/markers.css"; //Markers插件
export default {
  data() {
    return {
      viewer: "",
      imgurl16: require("@/assets/pic/node16.jpg"),
      imgurl17: require("@/assets/pic/node17.jpg"),
      imgurl18: require("@/assets/pic/node18.jpg"),
      imgurl19: require("@/assets/pic/node19.jpg"),
      imgurl20: require("@/assets/pic/node20.jpg"),
      imgurl21: require("@/assets/pic/node21.jpg"),
      imgurl22: require("@/assets/pic/node22.jpg"),
      imgurl23: require("@/assets/pic/node23.jpg"),
      imgurl24: require("@/assets/pic/node24.jpg"),
      imgurl25: require("@/assets/pic/node25.jpg"),
      imgurl26: require("@/assets/pic/node26.jpg"),
      imgurl27: require("@/assets/pic/node27.jpg"),
      imgurl28: require("@/assets/pic/node28.jpg"),
      imgurl29: require("@/assets/pic/node29.jpg"),
      imgurl30: require("@/assets/pic/node30.jpg"),
      imgurl31: require("@/assets/pic/node31.jpg"),
      imgurl32: require("@/assets/pic/node32.jpg"),
      imgurl33: require("@/assets/pic/node33.jpg"),
      imgurl34: require("@/assets/pic/node34.jpg"),
      imgurl35: require("@/assets/pic/node35.jpg"),
      imgurl36: require("@/assets/pic/node36.jpg"),
      imgurl37: require("@/assets/pic/node37.jpg"),
      imgurl38: require("@/assets/pic/node38.jpg"),
      imgurl39: require("@/assets/pic/node39.jpg"),
      imgurl40: require("@/assets/pic/node40.jpg"),
      imgurl41: require("@/assets/pic/node41.jpg"),
      imgurl42: require("@/assets/pic/node42.jpg"),
      imgurl43: require("@/assets/pic/node43.jpg"),
      imgurl44: require("@/assets/pic/node44.jpg"),
      imgurl45: require("@/assets/pic/node45.jpg"),
      imgurl46: require("@/assets/pic/node46.jpg"),
      imgurl47: require("@/assets/pic/node47.jpg"),
      imgurl48: require("@/assets/pic/node48.jpg"),
      imgurl49: require("@/assets/pic/node49.jpg"),
    };
  },
  mounted() {
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: this.imgurl16,
      size: {
        width: "100vw",
        height: "100vh",
      },
      autorotateLat: 0,//
      autorotateSpeed:0.20943951023931962,//自转速度
      navbar:[
        "fullscreen",
        "autorotate",
        "move",
        "download",
        "description",
        "caption"
      ], // 下方导航栏
      defaultZoomLvl: 0,//默认缩放
      defaultLong:0.0027446609001040845,//经度
      defaultLat:0.015220228499811306,//维度
      //autorotateDelay:1,//1毫秒后启动自动旋转
      plugins: [
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "circle16", //标记的唯一标识符
                tooltip: "午门", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "#ccc",
                  strokeWidth: "2px", //边框
                },
                visible: true, //标记的初始可见性。默认true
                longitude: 1.6, //位置
                latitude: 0.06, //位置
                anchor: "center right",
                // content: "9999999999", //点击标记后侧边列表框显示的内容
                // image: 'assets/aim.png',
                // defaultZoomLvl:-30
              },
              {
                id: "circle17", //标记的唯一标识符
                tooltip: "17", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.3, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle18", //标记的唯一标识符
                tooltip: "circle18", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
                // id: "circle3",
                // tooltip: "circle3", //提示的内容
                // longitude: -1.9, //位置
                // latitude: -0.28, //位置
                // rect: { width: 100, height: 100 }, //矩形宽高
                // svgStyle: {
                //   fill: "rgba(194,29,18,1)",
                //   cursor: "help",
                // },
                // visible: false,
              },
              {
                id: "circle19", //标记的唯一标识符
                tooltip: "circle19", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
                // id: "circle4",
                // tooltip: "circle4", //提示的内容
                // x: 2058,
                // y: 1069,
                // html: "HTML <b>marker</b> &hearts;",
                // anchor: "bottom right",
                // scale: [0.5, 1.5],
                // style: {
                //   maxWidth: "100px",
                //   color: "white",
                //   fontSize: "20px",
                //   fontFamily: "Helvetica, sans-serif",
                //   textAlign: "center",
                // },
                // visible: false,
              },
              {
                id: "circle20", //标记的唯一标识符
                tooltip: "circle20", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle25", //标记的唯一标识符
                tooltip: "前进", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -2.2, //位置
                latitude: 0.00, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle26", //标记的唯一标识符
                tooltip: "进门", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: 0.2, //位置
                latitude: 0.00, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle27", //标记的唯一标识符
                tooltip: "太和门", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: 1.5, //位置
                latitude: 0.0, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle28", //标记的唯一标识符
                tooltip: "circle28", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle29", //标记的唯一标识符
                tooltip: "circle29", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle30", //标记的唯一标识符
                tooltip: "circle30", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle31", //标记的唯一标识符
                tooltip: "circle31", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle32", //标记的唯一标识符
                tooltip: "circle32", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle33", //标记的唯一标识符
                tooltip: "circle33", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle34", //标记的唯一标识符
                tooltip: "circle34", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle35", //标记的唯一标识符
                tooltip: "circle35", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle36", //标记的唯一标识符
                tooltip: "circle36", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle37", //标记的唯一标识符
                tooltip: "circle37", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle38", //标记的唯一标识符
                tooltip: "circle38", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle39", //标记的唯一标识符
                tooltip: "circle39", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle40", //标记的唯一标识符
                tooltip: "circle40", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle41", //标记的唯一标识符
                tooltip: "circle41", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle42", //标记的唯一标识符
                tooltip: "circle42", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
              {
                id: "circle43", //标记的唯一标识符
                tooltip: "circle43", //提示的内容
                circle: 15, //直径
                svgStyle: {
                  fill: "rgba(255,255,0,0.3)",
                  stroke: "red",
                  strokeWidth: "2px", //边框
                },
                longitude: -1.6, //位置
                latitude: -0.28, //位置
                anchor: "center right",
                visible: false, //标记的初始可见性。默认true
                // image: this.imgurl3,
              },
            ],
          },
        ],
      ],
    });
    // 初始化之后，可以使用getPlugin方法获得插件实例，从而允许在插件上调用方法并订阅事件
    const markersPlugin = this.viewer.getPlugin(MarkersPlugin);
    // 点击事件监听
    // this.viewer.on('click', (e, data) => {
    //   console.log(`${data.rightclick ? 'right clicked' : 'clicked'} at longitude: ${data.longitude} latitude: ${data.latitude}`);
    // });
    // 监听放大缩小
    // this.viewer.on('zoom-updated', (e,level) => {
    //   console.log(level);
    // });
    // 启用/禁用自动旋转时触发
    this.viewer.on('autorotate', (e,enabled) => {
      // enabled:false没有旋转   true：旋转
      // console.log(enabled);
      // console.log(999);
      if(!enabled){
        setTimeout(() => {
          this.viewer.toggleAutorotate();//开启自动旋转/不旋转 
        }, 5000);
      }
    });
    // 当所有当前动画停止时触发
    // this.viewer.on('stop-all', (e) => {
      // enabled:false没有旋转   true：旋转
      // console.log(enabled);
      // alert(1)
    // });
    // 当视图经度和/或纬度发生变化时触发。
    this.viewer.on('position-updated', (e, position) => {
      // 可以获取到当前的经纬度，可以用于测试时获取经纬度
      // console.log(`new position is longitude: ${position.longitude} latitude: ${position.latitude}`);
    });
    // 监听点击marker
    markersPlugin.on("select-marker", (e, marker) => {
      console.log(marker.id);
      const markerid = marker.id;
 
      this.viewer
      // 动画
        .animate({
          longitude: marker.config.longitude,
          latitude: marker.config.latitude,
          zoom: 70,
          speed: "0.5rpm",
        })
        // .then(() =>
        //   this.viewer.setPanorama(this.imgurl2).then(
        //     () =>
        //       markersPlugin.updateMarker({
        //         id: marker.id,
        //         longitude: -1.8,
        //         latitude: -0.28,
        //       }),
 
        //     this.viewer
        //       .animate({
        //         zoom: 50,
        //         speed: "2rpm",
        //       })
        //       .then(
        //         () => (this.imgurl2 = this.imgurl3),
        //         console.log("继续操作")
        //       )
        //   )
        // );
 
        .then(() => {
          // markersPlugin.clearMarkers()//移除所有markers
          // this.viewer.rotate({x: 1500,y: 600,});//改变摄像机的位置
          markersPlugin.hideMarker(marker.id);//隐藏点击的marker
          // this.viewer.defaultZoomLvl=0
          if (markerid == "circle16") {
            // setPanorama参数：图片地址、下一个场景的初始经纬度、transition 默认（false）
            this.viewer.setPanorama(this.imgurl25,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true).then(() => {
              // this.viewer.setPanorama(this.imgurl25).then(() => {
                markersPlugin.showMarker("circle25")//显示你需要显示的marker
              }
            );

              console.log(this.viewer.defaultZoomLvl)
          }
          if (markerid == "circle17") {
            this.viewer
              // .setPanorama(this.imgurl18,{ longitude: 6.113027338614143, latitude:-2.914362084993627e-9 }, true)
              .setPanorama(this.imgurl18,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
              .then(() => markersPlugin.showMarker("circle18"));
          }
          if (markerid == "circle18") {
            this.viewer
              .setPanorama(this.imgurl19,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
              .then(() => markersPlugin.showMarker("circle19"));
          }
          if (markerid == "circle19") {
            this.viewer.setPanorama(this.imgurl20)
            .then(() => markersPlugin.showMarker("circle20"));
          }
          if (markerid == "circle25") {
            this.viewer.setPanorama(this.imgurl26,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle26"));
          }
          if (markerid == "circle26") {
            this.viewer.setPanorama(this.imgurl27,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle27"));
          }
          if (markerid == "circle27") {
            this.viewer.setPanorama(this.imgurl29,{ longitude: 16.432589417434965, latitude: 0.07016253709436304 }, true)
            .then(() => markersPlugin.showMarker("circle29"));
          }
          if (markerid == "circle29") {
            this.viewer.setPanorama(this.imgurl30)
            .then(() => markersPlugin.showMarker("circle30"));
          }
          if (markerid == "circle30") {
            this.viewer.setPanorama(this.imgurl36)
            .then(() => markersPlugin.showMarker("circle36"));
          }
          if (markerid == "circle36") {
            this.viewer.setPanorama(this.imgurl37)
            .then(() => markersPlugin.showMarker("circle37"));
          }
          if (markerid == "circle37") {
            this.viewer.setPanorama(this.imgurl38)
            .then(() => markersPlugin.showMarker("circle38"));
          }
          if (markerid == "circle38") {
            this.viewer.setPanorama(this.imgurl39)
            .then(() => markersPlugin.showMarker("circle39"));
          }
          this.viewer.zoom(0)//改变缩放
          // this.viewer.setOption('defaultLong',100);
          // this.viewer.setOption('defaultLat',100);
          // this.viewer.toggleAutorotate();//开启自动旋转/不旋转 
        });
    });
  },
};
// setPanorama(新全景图文件的网址) :加载新的全景文件,参数
// new position is longitude: 6.232589417434965 latitude: 0.07016253709436304
</script>