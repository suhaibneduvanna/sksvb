<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('login', 'AuthController::login');
$routes->post('login', 'AuthController::attemptLogin');
$routes->get('logout', 'AuthController::logout');

$routes->get('/', 'AdminController::dashboard');
$routes->get('dashboard', 'AdminController::dashboard');
$routes->get('manage/(:segment)', 'AdminController::list/$1');
$routes->get('manage/(:segment)/create', 'AdminController::create/$1');
$routes->post('manage/(:segment)/store', 'AdminController::store/$1');
$routes->get('manage/(:segment)/edit/(:num)', 'AdminController::edit/$1/$2');
$routes->post('manage/(:segment)/update/(:num)', 'AdminController::update/$1/$2');
$routes->get('manage/(:segment)/delete/(:num)', 'AdminController::delete/$1/$2');
