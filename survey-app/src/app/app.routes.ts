import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "create",
        component: CreateComponent
    },
    
    {
        path: "details/:id",
        component: DetailsComponent
    },
    {
        path: "edit/:id",
        component: EditComponent
    },
    {
        path: "delete/:id",
        component: DeleteComponent
    }

];
