var a = 1;
var doshit = function(){
    document.querySelector('[class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a"]').click();
    console.log(a);
    a++;
    setTimeout(doshit, 500);
};
setTimeout(doshit, 500);
