import { Component } from '@angular/core';
import { Button } from '../../components/common/button/button';
import { PageLayout } from '../../components/layout/page-layout/page-layout';
import { Title } from '../../components/common/title/title';

@Component({
  selector: 'app-home',
  imports: [Button, PageLayout, Title],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
