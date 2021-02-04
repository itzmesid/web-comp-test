
export const htmlTemplate = (data) =>  `
    <div class="amfm__overlay"></div>
    <div class="amfm__modal">
        <div class="amfm__signUp">
            <section class="step1">
                <div class="amfm__signUp_desc">${data.competitionName}</div>
                <button class="amfm__signUp_btn">${data.label.participate_btn}</button>
            </section>
            <section class="step2">
                <div class="amfm__signUp_desc">Congratulations! Here is your Coupon</div>
                <div class="amfm__signUp_coupon">
                    <strong>AMFM123456</strong>
                    <span class="amfm__fomo_copyCode">
                        <svg viewBox="0 0 512 512"><g><path d="m463.353 419.998c1.732-2.262 3.362-5.418 3.309-9.487v-333.604c0-8.284-6.716-15-15-15h-48.206v-46.907c0-8.284-6.716-15-15-15h-328.119c-8.284 0-15 6.716-15 15v420.093c0 8.284 6.716 15 15 15h48.206v46.907c0 8.284 6.716 15 15 15h237.557c3.016-.01 7.428-1.17 10.367-4.147l90.549-86.388c.423-.448.426-.39 1.337-1.467zm-388.016.095v-390.093h298.12v31.907h-249.915c-8.284 0-15 6.716-15 15v343.187h-33.205zm63.205-328.186h298.12v303.705h-75.549c-8.284 0-15 6.716-15 15v71.388h-207.571zm237.571 370.051v-36.346h38.097z"/><path d="m185.115 211.582h206.968c8.284 0 15-6.716 15-15s-6.716-15-15-15h-206.968c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m185.115 271.721h206.968c8.284 0 15-6.716 15-15s-6.716-15-15-15h-206.968c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m185.115 331.86h206.968c8.284 0 15-6.716 15-15s-6.716-15-15-15h-206.968c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m308.134 361.999h-123.019c-8.284 0-15 6.716-15 15s6.716 15 15 15h123.019c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/></g></svg>
                    </span>
                </div>
            </section>
            <div class="amfm_signUp_points">
                <span>200</span>
                <small>Points</small>
            </div>
        </div>
    </div>
<style>
* {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  .amfm__overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
    opacity: 0;
    pointer-events: none;
  }
  
  .amfm__signUp_btn {
    cursor: pointer;
    outline: 0;
    border: 0;
  }
  
  .amfm__signUp_coupon {
    cursor: copy;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-animation: none !important;
    animation: none !important;
  }
  
  .amfm__fomo_copyCode {
    width: 22px;
    height: 22px;
    margin-left: 10px;
  }
  
  .amfm__fomo_copyCode svg {
    display: block;
    width: 100%;
    fill: currentColor;
  }
  
  .amfm__modal {
    position: fixed;
    z-index: 101;
    font-family: 'Arial', sans-serif;
    bottom: 30px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
  }
  
  .amfm__signUp {
    min-width: 200px;
    max-width: 400px;
    height: 150px;
    padding: 0 150px 0 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    color: #333;
    font-size: 10px;
    background-color: #ffad00;
    border-radius: 0 75px 75px 0;
    opacity: 0;
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
    -webkit-transition: 0.5s ease-out 0.2s;
    transition: 0.5s ease-out 0.2s;
  }
  
  .amfm__signUp_desc {
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.75em;
    padding-right: 2em;
  }
  
  .amfm__signUp_btn,
  .amfm__signUp_coupon {
    padding: 0 30px;
    border-radius: 2.2em;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.4em;
    line-height: 3;
    text-transform: uppercase;
    background-color: #a41111;
    -webkit-appearance: none;
    -webkit-transition: 0.18s;
    transition: 0.18s;
  }
  
  .amfm__signUp_btn:hover,
  .amfm__signUp_coupon:hover {
    padding: 0 40px;
    -webkit-box-shadow: 0 0 0 3px #fff;
    box-shadow: 0 0 0 3px #fff;
  }
  
  .amfm__signUp_coupon strong {
    font-weight: 400;
  }
  
  .amfm_signUp_points {
    position: absolute;
    top: 50%;
    right: 30px;
    width: 90px;
    height: 90px;
    margin-top: -45px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #ffad00;
    line-height: 1;
    font-size: 2.6em;
    font-weight: 700;
    background: #fff;
    border-radius: 50%;
  }
  
  :host([opened]) .amfm_signUp_points {
    -webkit-box-shadow: 0px 0px 0px 1px currentcolor, 0px 0px 0px 8px white;
    box-shadow: 0px 0px 0px 1px currentcolor, 0px 0px 0px 8px white;
    -webkit-animation: heartBeat 2s ease-in-out 1s both 2;
    animation: heartBeat 2s ease-in-out 1s both 2;
  }
  
  .amfm_signUp_points small {
    font-size: 54%;
    font-weight: normal;
  }
  
  @-webkit-keyframes heartBeat {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    7% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    14% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    28% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    42% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  
  @keyframes heartBeat {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    7% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    14% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    28% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    42% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  
  .step2 {
    display: none;
  }
  
  :host([opened]) .amfm__overlay,
  :host([opened]) .amfm__modal {
    opacity: 1;
    pointer-events: all;
  }
  
  :host([opened]) .amfm__signUp {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
</style>
 `;

export const jsFuntions = `
    document.querySelector("button").addEventListener("click", function() {
        console.log("button clicked");
    });
    var overlay = document.querySelector(".amfm__overlay");
    overlay.addEventListener("click", function() {
        console.log("overlay");
    });
    
`;