(()=>{const e=(()=>{let e=[["X","O","X"],["X","X","X"],["X","X","X"]];const r=(()=>{const r=document.querySelector(".board"),o=document.querySelector(".result"),l=()=>{for(let r=0;r<3;++r)for(let o=0;o<3;++o)document.getElementById(`col-${r}${o}`).innerHTML=e[r][o]};return{createBoardGrid:()=>{for(let e=0;e<3;++e){const o=document.createElement("div");o.className="row",o.id=`row-${e}`;for(let r=0;r<3;++r){const l=document.createElement("div");l.className="col",l.id=`col-${e}${r}`,o.appendChild(l)}r.appendChild(o)}},renderBoard:l,displayWinner:e=>{o.innerHTML=`The winner is ${e}`},resetBoard:()=>{for(let r=0;r<3;++r)for(let o=0;o<3;++o)e[r][o]=`${r}${o}`,l()}}})(),o=(()=>{const o={keepPlaying:!0,currentRound:0},l=(l,t)=>{let n=(e=>e%2!=0?"X":"O")(l);e[t.row][t.col]=n,o.currentRound+=1,r.renderBoard();for(let o=0;o<3;++o)e[o][0]===e[o][1]&&e[o][0]===e[o][2]&&(r.displayWinner(n),setInterval((()=>{r.resetBoard()}),5e3))};return{initialiseBoard:()=>{for(let r=0;r<3;++r)for(let t=0;t<3;++t)e[r][t]=`[${r}${t}]`,document.getElementById(`col-${r}${t}`).addEventListener("click",(()=>{console.log(`Cell-${r}${t} clicked`),clickSpot={row:r,col:t},l(o.currentRound,clickSpot)}));r.renderBoard()}}})();return console.log(e[0][1]),console.log(e[0][0]),{displayController:r,gamePlay:o}})();e.displayController.createBoardGrid(),e.gamePlay.initialiseBoard()})();