setInterval(() => {
    let d = new Date();

    let hhrs = d.getHours();
    let mmin = d.getMinutes();
    let ssec  = d.getSeconds();

    hrotation = hhrs*30 + mmin/2;
    mrotation = 6*mmin;
    srotation = 6*ssec;

    hrs.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);