CREATE DATABASE groupvideowatching;

create extension if not exists "uuid-ossp";

create table Users (
    id uuid primary key not null default uuid_generate_v4(),
    username varchar(20) not null,
    password varchar(200) not null
);

create table Lobby (
    id uuid primary key not null default uuid_generate_v4(),
    adminids varchar(500) not null
);