import {DecimalPipe} from '@angular/common';
import {Component,OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from 'src/app/shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public usersList:any =[];



	constructor(public service: UsersService,private route: ActivatedRoute, private router: Router) { }

	ngOnInit(): void {
		this.service.getallusers().subscribe(data=>{
			console.log(data);
			this.usersList= data;
		})
	}

	searchUsers(data:any){
		this.service.searchByName(data).subscribe(data=>{

			console.log(data);
			this.usersList= data;   		
		})
	}




sortByLetter() {

this.usersList = this.usersList.sort(); 
console.log("Returned string is : " + this.usersList );
}





}
