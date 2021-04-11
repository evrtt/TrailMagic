# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(username: 'Demo Guest', password: "!@#$%^&*()")

trail = Trail.create({title: "Road to Bananaland",
  route_coords: "[[12.334, 45.455], [78.445, -112.345]]",
  difficulty: "hard",
  location: "Out Yonder",
  length: 30000.01,
  description: "Wowie this road goes ALL THE WAY to Bananaland. Finally. The fabled bananaland. You wont beleive how many bananas there are.",
  estimated_time: 100.0})