!function(){"use strict";var r=15,l=30,o="ArrowUp",a="ArrowRight",i="ArrowDown",s="ArrowLeft",e=37,n=38,u=39,c=40,h=function(t){return t.keyCode===e||t.keyCode===n||t.keyCode===u||t.keyCode===c},m=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},d=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"div",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=document.createElement(e);return n&&o.classList.add(n),o.innerHTML=t.trim(),o},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},k=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},g=function(){function t(){f(this,t)}return v(t,[{key:"render",value:function(){return d(this.template)}},{key:"bind",value:function(){}},{key:"template",get:function(){throw new Error("You have to define template for view")}},{key:"element",get:function(){return this._element||(this._element=this.render(),this.bind()),this._element}}]),t}(),p=function(t){function e(){return f(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return _(e,g),v(e,[{key:"render",value:function(){return d(this.template,"section","intro")}},{key:"bind",value:function(){var e=this;this.nameField=this.element.querySelector(".intro__input"),this.buttonSubmit=this.element.querySelector(".intro__button"),this.nameField.addEventListener("input",function(){return e.onInputChange(e.nameField.value)}),this.buttonSubmit.onclick=function(t){t.preventDefault(),e.onFormSubmit(e.nameField.value)}}},{key:"enableButton",value:function(){this.buttonSubmit.disabled=!1}},{key:"disableButton",value:function(){this.buttonSubmit.disabled=!0}},{key:"onInputChange",value:function(){}},{key:"onFormSubmit",value:function(){}},{key:"template",get:function(){return'\n      <h1 class="intro__title">Snake</h1>\n      <p class="intro__description">The player controls a snake, which picking up food, trying to avoid hitting its own tail. Each time the snake eats a piece of food, its tail grows longer. The user controls the direction of the snake\'s head (up, down, left, or right), and the snake\'s body follows. The player can not stop the snake from moving while the game is in progress, and can not make the snake go in reverse. </p>\n      <form class="intro__form">\n        <input class="intro__input" type="text" placeholder="Player name">\n        <button class="intro__button  continue" type="submit" disabled>Go!</button>\n      </form>'}}]),e}(),y=function(){function t(){f(this,t),this.content=new p}return v(t,[{key:"init",value:function(){var e=this;this.content.onInputChange=function(t){e.content.disableButton(),""!==t&&e.content.enableButton()},this.content.onFormSubmit=function(t){X.showGame(t)}}}]),t}(),b=function(t){function n(t){f(this,n);var e=k(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.gameState=t.gameState,e}return _(n,g),v(n,[{key:"_getHeaderTemplate",value:function(){return'\n      <header class="game__header">\n        <button class="back">\n          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n        </button>\n        <span class="game__score">Score: '+this.gameState.score+'</span>\n        <span class="game__level">Level: '+this.gameState.level+"</span>\n      </header>"}},{key:"_getCellsTemplate",value:function(){for(var t=this.gameState.snakeCoords,e=this.gameState.foodPoint,n="",o=1;o<=r;o++)for(var a=1;a<=l;a++){for(var i=!1,s=0;s<t.length;s++)if(o===t[s].Y&&a===t[s].X){i=!0;break}i?n+='<div class="game__cell game__cell--snake">'+o+", "+a+"</div>":e.X===a&&e.Y===o?n+='<div class="game__cell game__cell--food">'+o+", "+a+"</div>":n+='<div class="game__cell">'+o+", "+a+"</div>"}return n}},{key:"render",value:function(){return d(this.template,"div","game__content")}},{key:"bind",value:function(){var e=this;document.addEventListener("keydown",function(t){h(t)&&e.onCommandPress(t)}),this.buttonBack=this.element.querySelector(".back"),this.buttonBack.addEventListener("click",function(t){t.preventDefault(),e.onBackBtnClick()})}},{key:"onCommandPress",value:function(){}},{key:"onBackBtnClick",value:function(){}},{key:"template",get:function(){return"\n      "+this._getHeaderTemplate()+'\n      <div class="game__table">\n        '+this._getCellsTemplate()+"\n      </div>"}}]),n}(),w=function(t){function e(){return f(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return _(e,g),v(e,[{key:"bind",value:function(){var e=this;this.element.querySelector(".game__modal-button--reset").addEventListener("click",function(t){t.preventDefault(),e.onResetClick()}),this.element.querySelector(".game__modal-button--continue").addEventListener("click",function(t){t.preventDefault(),e.onContinueClick()})}},{key:"onResetClick",value:function(){}},{key:"onContinueClick",value:function(){}},{key:"template",get:function(){return'\n    <div class="game__modal">\n      <h3 class="game__modal-question">Do you really want to quit?</h3>\n      <p class="game__modal-text">Progress in the current game will be lost!</p>\n      <button type="button" class="game__modal-button  game__modal-button--reset">Yes</button>\n      <button type="button" class="game__modal-button  game__modal-button--continue">No</button>\n    </div>'}}]),e}(),S=function(){function e(t){f(this,e),this.model=t,this.content=new b(this.model),this.root=document.createElement("section"),this.root.classList.add("game"),this.root.appendChild(this.content.element),this._interval=null,this.isModalOpen=!1}return v(e,[{key:"init",value:function(){var e=this;this.startGame(),this.content.onCommandPress=function(t){e.model.switchCommand(t.key)},this.content.onBackBtnClick=function(){return e.showModal()}}},{key:"startGame",value:function(){var n=this;this._interval=setInterval(function(){var e=!0;n.content.onCommandPress=function(t){e&&(n.model.switchCommand(t.key),e=!1)},n.model.shouldContinue()?(n.updateView(),n.model.isNextLevel&&(n.stopGame(),n.startGame())):(n.model.saveResult(),n.stopGame(),X.showStats())},this.model.tick)}},{key:"stopGame",value:function(){clearInterval(this._interval)}},{key:"updateView",value:function(){var t=this,e=new b(this.model);this.root.replaceChild(e.element,this.content.element),this.content=e,this.content.onBackBtnClick=function(){t.isModalOpen||t.showModal()}}},{key:"showModal",value:function(){var t=this;this.stopGame(),this.isModalOpen=!0;var e=new w;e.onResetClick=function(){X.showIntro()},e.onContinueClick=function(){t.startGame(),e.element.remove(),t.isModalOpen=!1},this.root.appendChild(e.element)}},{key:"element",get:function(){return this.content.element}}]),e}(),C=function(){function e(t){f(this,e),this.myStorage=window.localStorage,this.playerName=t,this.command=a,this.tick=500,this.restartGame()}return v(e,[{key:"switchCommand",value:function(t){var e=this.getNewSnakePoint(t),n=this._gameState.snakeCoords[1];e.X===n.X&&e.Y===n.Y||(this.command=t)}},{key:"shouldContinue",value:function(){this.isNextLevel=!1;var t=this.getNewSnakePoint(this.command);return!this.isSnake(t)&&(this.isFood(t)?(this._gameState.score+=1*this._gameState.level,this._gameState.score%5==0&&(this.isNextLevel=!0,this.changeLevel()),this.getNewFoodPoint()):this._gameState.snakeCoords.pop(),this._gameState.snakeCoords.unshift(t),!0)}},{key:"changeLevel",value:function(){this._gameState.level+=1,this.tick*=.9}},{key:"getNewFoodPoint",value:function(){var t={X:m(1,l),Y:m(1,r)};this.isSnake(t)?this.getNewFoodPoint():this._gameState.foodPoint=t}},{key:"getNewSnakePoint",value:function(t){var e=this._gameState.snakeCoords.slice()[0],n=Object.assign({},e);switch(t){case o:if(1===e.Y){n.Y=r;break}n.Y-=1;break;case a:if(e.X===l){n.X=1;break}n.X+=1;break;case i:if(e.Y===r){n.Y=1;break}n.Y+=1;break;case s:if(1===e.X){n.X=l;break}n.X-=1}return n}},{key:"restartGame",value:function(){this._gameState={level:1,score:0,snakeCoords:[{X:6,Y:5},{X:5,Y:5},{X:4,Y:5}],foodPoint:{X:15,Y:7}}}},{key:"saveResult",value:function(){this.myStorage.setItem("key_"+Math.random().toString(36).substr(2,9),[this.playerName,this._gameState.score])}},{key:"isSnake",value:function(t){for(var e=this._gameState.snakeCoords,n=0;n<e.length;n++)if(e[n].X===t.X&&e[n].Y===t.Y)return!0;return!1}},{key:"isFood",value:function(t){var e=this._gameState.foodPoint;return e.X===t.X&&e.Y===t.Y}},{key:"gameState",get:function(){return this._gameState}}]),e}(),P=function(t){function e(){f(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.myStorage=window.localStorage,t.data=[],t._templateAllGames="",t}return _(e,g),v(e,[{key:"_getTemplates",value:function(){var n=this;this.data.forEach(function(t,e){n._templateAllGames+=n._templateOneGame(t,e)})}},{key:"_getData",value:function(){for(var t=0;t<this.myStorage.length;t++){var e=this.myStorage.key(t),n=this.myStorage.getItem(e).split(",");this.data.push({playerName:n[0],score:n[1]})}this.data.sort(function(t,e){return e.score-t.score})}},{key:"_templateOneGame",value:function(t,e){return'\n      <tr>\n        <td class="result__number">'+(e+1)+".</td>\n        <td>"+t.playerName+'</td>\n        <td class="result__total  result__total--final">'+t.score+"</td>\n      </tr>"}},{key:"render",value:function(){return d(this.template,"section","result")}},{key:"bind",value:function(){var e=this;this.buttonBack=this.element.querySelector(".back"),this.buttonBack.addEventListener("click",function(t){t.preventDefault(),e.onBackBtnClick()})}},{key:"template",get:function(){return this._getData(),this._getTemplates(),'\n    <header class="result__header">\n      <button class="result__back back">\n        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n      </button>\n      <h1 class="result__title">Results</h1>\n    </header>\n    <table class="result__table">\n      <tr>\n        <th class="result__number">#</th>\n        <th>Player</th>\n        <th class="result__total  result__total--final">Score</th>\n      </tr>\n      '+this._templateAllGames+"\n    </table>"}}]),e}(),B=function(){function e(t){f(this,e),this.content=new P(t)}return v(e,[{key:"init",value:function(){this.content.onBackBtnClick=function(){return X.showIntro()}}}]),e}(),O=document.querySelector(".central"),Y=function(t){O.innerHTML="",O.appendChild(t)},X=function(){function t(){f(this,t)}return v(t,null,[{key:"showIntro",value:function(){var t=new y;Y(t.content.element),t.init()}},{key:"showGame",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Anonymous Raccoon",e=new S(new C(t));Y(e.root),e.init()}},{key:"showStats",value:function(){var t=new B;Y(t.content.element),t.init()}}]),t}();X.showIntro()}();
//# sourceMappingURL=main.js.map
