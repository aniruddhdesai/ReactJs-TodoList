import React from 'react';
import './App.css'

function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div class="container-fluid ">
                    <a class="navbar-brand font-weight-bold font-italic text-light" href="#n">ToDo-List</a>
                    <ul class="navbar-nav  mb-2 mb-lg-0 float-lg-end">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="#a">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#aa">List</a>
                        </li>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle text-light" data-toggle="dropdown">  Menu </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#aaaaaa">Link 1</a>
                                <a class="dropdown-item" href="#aaaaa">Link 2</a>
                                <a class="dropdown-item" href="#aaaa">Link 3</a>
                            </div>
                        </div>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Nav;

