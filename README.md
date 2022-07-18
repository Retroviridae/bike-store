Deployed on : https://phase-5-capstone-bike-store.herokuapp.com/


sudo service postgresql start
rails s
npm start --prefix client

heroku run console

Reset heroku db:
    Step 1: heroku restart
    Step 2: heroku pg:reset DATABASE (no need to change the DATABASE)
    Step 3: heroku run rake db:migrate
    Step 4: heroku run rake db:seed (if you have seed)
