import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PageLayout } from '../../components/layout/page-layout/page-layout';
import { Title } from '../../components/common/title/title';
import { Card } from '../../components/common/card/card';
import { MatIcon } from '@angular/material/icon';
import { Button } from '../../components/common/button/button';


@Component({
  selector: 'app-not-found',
  imports: [CommonModule, MatButtonModule, RouterModule, PageLayout, Title, MatIcon, Button],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {

}
