let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え (デバック用) : ' + kotae);

let kaisu = 1;

hantei();
hantei();
hantei();
hantei();



function hantei() {
    
    let yoso = 4;

    console.log(kaisu +  "回目の予想:" + yoso);

    if(kaisu < 3){
    
    if(kotae === yoso) {
        console.log("正解です。おめでとう！");
      } else if(kotae > yoso){
        console.log("まちがい．答えはもっと大きいですよ");
      } else if(kotae < yoso) {
        console.log("まちがい．答えはもっと小さいですよ");
      }
    }

    else if(kaisu === 3){
        if(kotae === yoso) {
            console.log("正解です。おめでとう！");
          } else if(kotae !== yoso){
            console.log("まちがい。 残念でした答えは " + kotae + "です。");
          }
    }
    else if(kaisu > 3){
        console.log("答えは " + kotae + "でした。すでにゲームは終わっています。");

    }
    kaisu = kaisu + 1;
}



