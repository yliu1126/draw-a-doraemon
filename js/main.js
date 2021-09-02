document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('click', musicPlay);
}

!function(){
    var duration = 50
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })

    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(run, duration)
            }else{
                fn & fn.call()
            }
        }, duration)
    }
    let code = `/* Today, we are gonna draw a Doraemon, who has been my favorite character since childhood */
/* Click the page if you want some music! */
/* First, we need the Doraemon's blue */
.preview {
  background: #19abff;
}

/* Then, we need a round head */
.head {
  border: 2px solid black;
  width: 350px;
  height: 350px;
  background-color: transparent;
  position: absolute;
  border-radius: 50%;
  margin-left: -175px;
  top: -15%;
  left: 50%;
}

/* And a round face! */
.face {
  width: 305px;
  height: 280px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
  margin-left: -152.5px;
  top: 20%;
  left: 50%;
}

/* Let's draw his nose */
.nose {
  width: 30px;
  height: 30px;
  background-color: #d70010;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
  left: 50%;
  margin-left: -15px;
  margin-top: 55px;
  z-index: 1;
}

/* With two eyes */
.eye {
  width: 60px;
  height: 80px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
  margin-top: -5px;
}

/* Right eye */
.eye.left {
  left: 50%;
}

/* Left eye */
.eye.right {
  right: 50%;
}

/* Eyeballs */
.eye::before {
  content: "";
  display: block;
  width: 15px;
  height: 20px;
  background: black;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
}

.eye.left::before {
  right: 50%;
  top: 40%;
}

.eye.right::before {
  left: 50%;
  top: 40%;
}

.eye::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  background: white;
  position: absolute;
  border-radius: 50%;
}

.eye.left::after {
  right: 59%;
  top: 47%;
}

.eye.right::after {
  left: 59%;
  top: 47%;
}

/* Let's get his upperLip! */
.upperLip.left {
  width: 102px;
  height: 17px;
  border: 2px solid black;
  border-color: transparent transparent black black;
  border-radius: 50%;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: 60px;
  transform: rotate(-5deg);
  z-index: 2;
}

.upperLip.left:before {
  content: "";
  display: block;
  width: 60px;
  height: 75px;
  border: 2px solid black;
  border-color: black transparent transparent black;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: -490%;
  left: -30%;
  transform: rotate(-32deg);
}

.upperLip.right {
  width: 102px;
  height: 17px;
  border: 2px solid black;
  border-color: transparent black black transparent;
  border-radius: 50%;
  background: white;
  position: absolute;
  right: 50%;
  top: 50%;
  margin-right: -100px;
  margin-top: 60px;
  transform: rotate(5deg);
  z-index: 2;
}

.upperLip.right:before {
  content: "";
  display: block;
  width: 60px;
  height: 75px;
  border: 2px solid black;
  border-color: black black transparent transparent;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: -490%;
  right: -30%;
  transform: rotate(32deg);
}

.upperLip.right:after {
  content: "";
  display: block;
  width: 3px;
  height: 65px;
  background: black;
  position: absolute;
  top: -420%;
  left: -4%;
  transform: rotate(-5deg);
}

.lowerLip-wrapper {
  bottom: -56%;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
  z-index: 1;
}

/* And lowerLip of course! */
.lowerLip {
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/400px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}

/* Dont't forget the tongue */
.lowerLip::after {
  content: "";
  position: absolute;
  border: 2px solid black;
  bottom: -40px;
  width: 150px;
  height: 100px;
  background: #fc4a62;
  left: 50%;
  margin-left: -75px;
  border-radius: 100px 100px 0px 0px;
}

/* Final touch with the beards! */
.leftBeard {
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: 30px;
  transform: rotate(4deg);
  z-index: 2;
}
.leftBeard:before {
  content: "";
  display: block;
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  margin-top: -40px;
  transform: rotate(20deg);
}
.leftBeard::after {
  content: "";
  display: block;
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  margin-top: 30px;
  margin-left: 5px;
  transform: rotate(-15deg);
}

.rightBeard {
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-right: -150px;
  margin-top: 30px;
  transform: rotate(-4deg);
  z-index: 2;
}
.rightBeard:before {
  content: "";
  display: block;
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  margin-top: -40px;
  transform: rotate(-20deg);
}
.rightBeard::after {
  content: "";
  display: block;
  width: 90px;
  height: 3px;
  background: black;
  position: absolute;
  top: 50%;
  margin-top: 30px;
  margin-right: 5px;
  transform: rotate(15deg);
}
/* We're done! This Doraemon is for you :) */
`
writeCode('',code)

}.call()