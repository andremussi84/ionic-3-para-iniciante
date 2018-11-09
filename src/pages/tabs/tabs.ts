import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//importado de Feed.ts (na pasta app foi importado feed.module.ts)
import { FeedPage } from '../feed/feed';
//import { IntroPageModule } from '../intro/intro.module';
//import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab0Root = IntroPage;
  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  //é preciso dizer ao tabs quais são as páginas disponíveis e qual o nome dela (classe vinda de feed.ts).
  tab4Root = FeedPage;
 
    constructor() {

  }
}
