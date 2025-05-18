import { Component, inject } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router);

}
