# memoit

![memoit](docs/images/memoit.png)

## Overview

[**memoit**](https://memoit-production.herokuapp.com/) is a **to-do list manager** web application made with React and Ruby on Rails.

Some of memoit's features include:

- :memo: Creating, editing, and deleting tasks
- :zap: Tagging system to categorize tasks efficiently
- :iphone: Mobile-responsive design
- :lock: User authentication

memoit was created as part of an application for [Computing for Voluntary Welfare Organisations](https://www.comp.nus.edu.sg/~vwo/).

Start using [**memoit**](https://memoit-production.herokuapp.com/) now!

## Site Map

- [Live Site](https://memoit-production.herokuapp.com/)
- [User Guide](https://jasonqiu212.github.io/memoit/UserGuide.html)
- [Requirements](https://jasonqiu212.github.io/memoit/Requirements.html)
- [Reflection](https://jasonqiu212.github.io/memoit/Reflection.html)

## Getting Started

1. memoit requires `Ruby 3.0.3`. To install and manage Ruby versions, you can use [rbenv](https://github.com/rbenv/rbenv).

```
$ brew install rbenv ruby-build
$ rbenv install 3.0.3
```

2. Download Bundler to install dependencies.

```
$ gem install bundler
```

3. Install ruby dependencies.

```
$ bundle install
```

4. Create the database and run migrations.

```
$ rails db:create
$ rails db:migrate
```

5. Run the server locally at [localhost:3000](http://localhost:3000/).

```
$ rails server
```

Congratulations! You have successfully set up memoit.
