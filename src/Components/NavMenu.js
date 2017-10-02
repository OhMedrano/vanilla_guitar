import MakeElement from '../Tools/MakeElement.js';
var _this = this;
function NavMenu() {
  let newElement = new MakeElement;
  let nav = newElement.createEle('div','navMenu',[12,12,12,12],['naved']);
  let navCount = 0;
  let navBanner = newElement.createEle('div','navBanner',[12,12,6,6],['navStuff']);
  let navLinked = newElement.createEle('div','navLinksContainer',[12,12,6,6],['navStuff']);
  let navLinkedLinks = [
                        {'name':'Home',
                         'webLink':'#home',
                         'html':'home' },
                         {'name':'Visual Scales',
                         'webLink':'#visScale',
                          'html':'visscale' },
                         {'name':'Visual Harmonics',
                         'webLink':'#visHarm',
                          'html':'visharm' }
                        ];

      navBanner.innerText = `Guitar Tools`;

      navLinkedLinks.forEach(function(navLink,index){
        let navLi = newElement.createEle('div',navLink.html+"Link",[12,12,3,3],['navLinks']);
            navLi.innerText = navLink.name;
        
         
            navLinked.append(navLi); 

            navLi.addEventListener('click',function(event){
              event.preventDefault();
              console.log(event.target);

              let navcollect = document.querySelector('#'+navLink.html);
                

              if(event.target.id == navLink.html){
                navcollect.style.border = '1px solid white';  
              } else {
                document.querySelector('.guitarBodies').style.border = '1px solid black';
              }
              
              console.log(navcollect);
               
            });
      });

  nav.append(navBanner,navLinked);

  return (nav)
}

NavMenu.prototype = {
  switchNav : function(pageNum){
    this.navNum = pageNum;


    return this.navNum;
  }
}


export default NavMenu;