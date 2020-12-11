let screen = document.getElementById('content_wrapper');
let vw = screen.clientWidth / 100;
let vh = window.innerHeight / 100;
/* -- 背景 -- */
//下にゆっくり流れる
gsap.to("#background",{
    scrollTrigger: {
        trigger: "#all_wrapper",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    },
    top: -130 * vw,
});
//ガタガタゆれる1
gsap.timeline({
    repeat: 0,
    scrollTrigger: {
        trigger: "#ruler3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
        markers: false,
        scrub: true
    }
  })
  .to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "4 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "6 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "3 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2 * vw"
});
//ガタガタ揺れる2
gsap.timeline({
    repeat: 0,
    scrollTrigger: {
        trigger: "#ruler5",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
        markers: false,
        scrub: true
    }
  })
  .to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "4 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "6 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "3 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2 * vw"
});
//ガタガタ揺れる3
gsap.timeline({
    repeat: 0,
    scrollTrigger: {
        trigger: "#ruler8",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
        markers: false,
        scrub: true
    }
  })
  .to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "4 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "6 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "3 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2 * vw"
});
//ガタガタ揺れる4
gsap.timeline({
    repeat: 0,
    scrollTrigger: {
        trigger: "#ruler10",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
        markers: false,
        scrub: true
    }
  })
  .to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "4 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "6 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "3 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "-2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "50%",
    backgroundPositionY: "2.5 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "-2 * vw"
}).to(".bg", {
    backgroundPositionX: "49%",
    backgroundPositionY: "2 * vw"
});

/* -- 煙1(上って下がる)-- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler3",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke1", {
    bottom: -50 * vw
  })
  .to(".smoke1", {
    bottom: -50 * vw
  })
  .to(".smoke1", {
    bottom: -50 * vw
  })
  .to(".smoke1", {
    bottom: -100 * vw
  })
  .to(".smoke1", {
    bottom: -200 * vw
});

/* -- 煙3(出て消える) -- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler3",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke3", {
    opacity: 0.8
  })
  .to(".smoke3", {
    opacity: 0
});

/* -- 隕石1 -- */
gsap.to(".meteo1",{ // 動かす要素
    scrollTrigger: {
        trigger: "#ruler2", // この要素まできたらアニメーション開始
        start: "top center", // ビューポート設定 画面上のどこを開始位置にするか
        end: "bottom center",
        toggleActions: "restart pause resume reset",
        markers: false, // 検証用のマーカーを表示
        scrub: true // 要素を追従させる

    },
    top: 200 * vw,
    right: 200 * vw,
});
/* -- 隕石2 -- */
gsap.to(".meteo2",{
    scrollTrigger: {
        trigger: "#ruler4",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause resume reset",
        markers: false,
        scrub: true,
    },
    top: 100 * vw,
    right: 200 * vw,
});

/* -- 煙2(上って下がる)-- */
gsap.timeline({
    scrollTrigger: {
        trigger: "#ruler5",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke2", {
    bottom: -300 * vw,
    duration: 2,
  })
  .to(".smoke2", {
    bottom: -50 * vw,
    duration: 0.5,
  })
  .to(".smoke2", {
    bottom: -50 * vw,
    duration: 2,
  })
  .to(".smoke2", {
    bottom: -300 * vw,
    duration: 4,
});

/* -- 煙4(出て消える) -- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler6",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke4", {
    opacity: 0.8
  })
  .to(".smoke4", {
    opacity: 0
});

/* -- 煙5(出て消える) -- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler7",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke5", {
    opacity: 0.8
  })
  .to(".smoke5", {
    opacity: 0
});

/* -- 煙6(上って下がる)-- */
gsap.timeline({
    scrollTrigger: {
        trigger: "#ruler7",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke6", {
    bottom: -200 * vw,
    duration: 2,
  })
  .to(".smoke6", {
    bottom: -50 * vw,
    duration: 0.5,
  })
  .to(".smoke6", {
    bottom: -50 * vw,
    duration: 2,
  })
  .to(".smoke6", {
    bottom: -200 * vw,
    duration: 4,
});

/* -- 隕石3 -- */
gsap.to(".meteo3",{
    scrollTrigger: {
        trigger: "#ruler7",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause resume reset",
        markers: false,
        scrub: true,
    },
    top: 100 * vw,
    right: 200 * vw,
});

/* -- 隕石4 -- */
gsap.to(".meteo4",{
    scrollTrigger: {
        trigger: "#ruler9",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause resume reset",
        markers: false,
        scrub: true,
    },
    top: 100 * vw,
    right: 200 * vw,
});


/* -- 煙7(上って下がる)-- */
gsap.timeline({
    scrollTrigger: {
        trigger: "#ruler10",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke7", {
    bottom: -200 * vw,
    duration: 2,
  })
  .to(".smoke7", {
    bottom: -50 * vw,
    duration: 0.5,
  })
  .to(".smoke7", {
    bottom: -50 * vw,
    duration: 2,
  })
  .to(".smoke7", {
    bottom: -200 * vw,
    duration: 4,
});

/* -- 煙8(出て消える) -- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler10",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke8", {
    opacity: 0.8
  })
  .to(".smoke8", {
    opacity: 0
});


/* -- 煙9(出て消える) -- */
gsap.timeline({
    repeat: 0,
    repeatDelay: 0.2,
    scrollTrigger: {
        trigger: "#ruler11",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
    }
  })
  .to(".smoke9", {
    opacity: 0.8
  })
  .to(".smoke9", {
    opacity: 0
});
