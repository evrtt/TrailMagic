# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(username: 'Demo Guest', password: "!@#$%^&*()")

trail_01 = Trail.create({title: "North Crestone Creek Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "hard",
  location: "Sangre De Cristo Wilderness, CO, USA",
  length: 10.4,
  description: "TBD",
  estimated_time: 7.25})

trail_02 = Trail.create({title: "Cahill Pond Trail
",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "easy",
  location: "Mueller State Park, CO, USA",
  length: 2.6,
  description: "TBD",
  estimated_time: 1.25})

trail_03 = Trail.create({title: "Castle Trail Loop",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "moderate",
  location: "Mount Falcon Park, CO, USA",
  length:  6.7,
  description: "TBD",
  estimated_time: 3.75})

trail_04 = Trail.create({title: "Upper Blue Lakes Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "hard",
  location: "Mount Sneffels Wilderness, CO, USA",
  length: 8.6,
  description: "TBD",
  estimated_time: 4.5})

trail_05 = Trail.create({title: "Quandary Peak Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "hard",
  location: "White River National Forest, CO, USA",
  length: 7.5,
  description: "TBD",
  estimated_time: 5.0})

trail_06 = Trail.create({title: "Fourmile Falls Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "moderate",
  location: "Weminuche Wilderness, CO, USA",
  length: 8.3,
  description: "TBD",
  estimated_time: 3.2})

trail_07 = Trail.create({title: "Cheeseman Park Outer Loop",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "easy",
  location: "Cheeseman Park, Denver, CO, USA",
  length: 1.8,
  description: "TBD",
  estimated_time: 0.75})

trail_08 = Trail.create({title: "Stone House Loop",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "easy",
  location: "Bear Valley Open Space, Lakewood, CO, USA",
  length: 3.2,
  description: "TBD",
  estimated_time: 1.25})

trail_09 = Trail.create({title: "Mesa and Redrock Canyon Loop",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "easy",
  location: "Red Rock Canyon Open Space, Colo. Spgs., CO, USA",
  length: 1.8,
  description: "TBD",
  estimated_time: 0.75})

trail_10 = Trail.create({title: "High Dune Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "hard",
  location: "Great Sand Dunes National Park CO, USA",
  length: 3.0,
  description: "TBD",
  estimated_time: 2.25})

trail_11 = Trail.create({title: "North Table Mountain Rim Loop",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "moderate",
  location: "North Table Mountain Park, Golden, CO, USA",
  length: 8.3,
  description: "TBD",
  estimated_time: 3.25})

trail_12 = Trail.create({title: "North Mount Elbert Trail",
  route_coords: "[[38.0187, -105.68586], [38.019659, -105.613356], [38.0187, -105.68586]]",
  difficulty: "hard",
  location: "Mount Massive Wilderness, CO, USA",
  length: 9.3,
  description: "TBD",
  estimated_time: 6.45})



#   Trail Magic Trail Seeds

# North Crestone Creek Trail
# Dist 10.4 miles
# Est 7.25 hours
# hard
# Sangre De Cristo Wilderness, CO, USA


# Cahill Pond Trail
# Dist 2.6 Mile
# Est 1.25 hours
# easy
# Mueller State Park, CO, USA

# Mount Falcon Castle Trail Loop PHONE PHOTOS
# 	-Dist 6.7 Miles
# 	-Est 3.75 Hours
# 	-Moderate
# 	-Mount Falcon Park, Colorado, USA

# Lower, Middle and Upper Blue Lakes
# Dist 8.6 Mile
# Est 4.5 hours
# hard
# Mount Sneffels Wilderness, CO, USA
# Quandary Peak Trail
# Dist 7.5 Miles
# Est 5.0 hours
# hard
# White River National Forest, CO, USA
# Fourmile Falls via Fourmile Stock Drive Trail
# Dist 8.3 Miles
# Est 3.2 Hours
# moderate
# Weminuche Wilderness, CO, USA
# North Mount Elbert Trail
# Dist 9.3 Miles
# Est 6.45 hours
# hard
# Mount Massive Wilderness, CO, USA
# Cheeseman Park Outer Loop PHONE PHOTOS
# Dist 1.8 Miles
# Est 0.75 hours
# easy
# Cheeseman Park, Denver, CO, USA
# Bear Creek to Stone House Trail PHONE PHOTOS
# Dist 3.2 Miles
# Est 1.25 Hours
# easy
# Bear Valley Open Space, Lakewood, CO, USA
# Mesa, Greenlee and Redrock Canyon Loop
# Dist 1.8 Miles
# Est 0.75 Miles
# easy
# Red Rock Canyon Open Space, Colo. Spgs., CO, USA
# High Dune Trail
# Dist 3.0 Mils
# Est 1.5 Hours
# hard
# Great Sand Dunes National Park, CO, USA
# North Table Mountain Rim Loop
# Dist 8.3 Mile
# Est 3.25 hours
# moderate
# North Table Mountain Park, Golden, CO, USA
