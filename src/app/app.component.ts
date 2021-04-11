import { Component, Inject } from '@angular/core';
import * as $ from 'jquery';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-website';
  panelOpenState = false;
  toggleMenuIcon() {
      $('#toggle').toggleClass("on");
      $('.toggle-menu-button').toggleClass("menu-open");
      $('.menu-backdrop').fadeToggle();
  }

  activeTab(currentTab) {
    $('.menuTabs').removeClass('active');
    $('.open-tab').removeClass('active-line');
    $('.'+currentTab).addClass('active');
    $('.'+currentTab + '-line').addClass('active-line');
  }

  collapseMenu(currentTab){
    $('#mat-expansion-panel-header-0').trigger('click');
    this.activeTab(currentTab);
  }
}