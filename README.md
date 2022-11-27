# memoit

![memoit](docs/images/memoit.png)

## Overview

memoit is a **to-do list manager** web application made with React and Ruby on Rails.

## Site Map

- [User Guide](docs/UserGuide.md)
- [Requirements](docs/Requirements.md)

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
