# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Trail.delete_all

demo = User.create(username: 'Demo Guest', password: "!@#$%^&*()")

trail_01 = Trail.create({title: "North Crestone Creek Trail",
  route_coords: '{"1": [38.0187, -105.68586], "2": [38.019659, -105.613356], "3": [38.0187, -105.68586]}',
  difficulty: "hard",
  location: "Sangre De Cristo Wilderness, CO, USA",
  length: 10.4,
  description: "TBD",
  estimated_time: 7.25})

trail_02 = Trail.create({title: "Cahill Pond Trail",
  route_coords: '{"1": [38.0187, -105.68586], "2": [38.0187, -105.68586]}',
  difficulty: "easy",
  location: "Mueller State Park, CO, USA",
  length: 2.6,
  description: "TBD",
  estimated_time: 1.25})

trail_03 = Trail.create({title: "Summer Whitehouse Trail Loop",
  route_coords: '{"1": [39.64678, -105.19658], "2": [39.64043, -105.21840], "3": [39.64678, -105.19658]}',
  difficulty: "moderate",
  location: "Mount Falcon Park, CO, USA",
  length:  6.7,
  description: "TBD",
  estimated_time: 3.75})

trail_04 = Trail.create({title: "Upper Blue Lakes Trail",
  route_coords: '{"1": [38.03592, -107.80658], "2": [37.999289, -107.805340], "3": [38.03592, -107.80658]}',
  difficulty: "hard",
  location: "Mount Sneffels Wilderness, CO, USA",
  length: 8.6,
  description: "TBD",
  estimated_time: 4.5})

trail_05 = Trail.create({title: "Quandary Peak Trail",
  route_coords: '{"1": [39.38548, -106.06195], "2": [39.39724, -106.10641], "3": [39.38548, -106.06195]}',
  difficulty: "hard",
  location: "White River National Forest, CO, USA",
  length: 7.5,
  description: "TBD",
  estimated_time: 5.0})

trail_06 = Trail.create({title: "Fourmile Falls Trail",
  route_coords: '{"1": [37.40957, -107.05266], "2": [37.443671, -107.039395], "3": [37.40957, -107.05266]}',
  difficulty: "moderate",
  location: "Weminuche Wilderness, CO, USA",
  length: 8.3,
  description: "TBD",
  estimated_time: 3.2})

trail_07 = Trail.create({title: "Cheeseman Park Outer Loop",
  route_coords: '{"1": [39.733363, -104.964382], "2": [39.732254, -104.964179], "3": [39.731138, -104.964340], "4": [39.729362, -104.964454], "5": [39.729252, -104.966905], "6": [39.729275, -104.966913], "7": [39.731002, -104.968469], "8": [39.731785, -104.968644], "9": [39.733513, 104.968693], "10": [39.734726, -104.968686], "11": [39.736024, -104.968716], "12": [39.736388, -104.967814], "13": [39.736353, -104.965063], "14": [39.735529, -104.964452], "15": [39.734203, -104.964143], "16": [39.733363, -104.964382]}',
  difficulty: "easy",
  location: "Cheeseman Park, Denver, CO, USA",
  length: 1.8,
  description: "TBD",
  estimated_time: 0.75})

trail_08 = Trail.create({title: "Stone House Loop",
  route_coords: '{"1": [39.664931, -105.094546], "2": [39.664604, -105.092258], "3": [39.666761, -105.088668], "4": [39.667145, -105.086794], "5": [39.667754, -105.086763], "6": [39.668103, -105.089147], "7": [39.667650, -105.089785], "8": [39.667626, -105.090753], "9": [39.666157, -105.091270], "10": [39.665887, -105.092220], "11": [39.666483, -105.094226], "12": [39.665742, -105.094744], "13": [39.664931, -105.094546]}',
  difficulty: "easy",
  location: "Bear Valley Open Space, Lakewood, CO, USA",
  length: 3.2,
  description: "TBD",
  estimated_time: 1.25})

trail_09 = Trail.create({title: "Mesa and Redrock Canyon Loop",
  route_coords: '{"1": [38.851228, -104.878386], "2": [38.849151, -104.880056], "3": [38.843326, -104.882469], "4": [38.843419, -104.883183], "5": [38.843709, -104.883461], "6": [38.844096, -104.883315], "7": [38.843713, -104.884222], "8": [38.848510, -104.882020], "9": [38.850822, -104.881829], "10": [38.853329, -104.879071], "11": [38.853075, -104.878422], "12": [38.851228, -104.878386]}',
  difficulty: "easy",
  location: "Red Rock Canyon Open Space, Colo. Spgs., CO, USA",
  length: 1.8,
  description: "TBD",
  estimated_time: 0.75})

trail_10 = Trail.create({title: "High Dune Trail",
  route_coords: '{"1": [37.739525, -105.517148], "2": [37.749266, -105.533035], "3": [37.739525, -105.517148]}',
  difficulty: "hard",
  location: "Great Sand Dunes National Park CO, USA",
  length: 3.0,
  description: "TBD",
  estimated_time: 2.25})

trail_11 = Trail.create({title: "North Table Mountain Rim Loop",
  route_coords: '{"1": [39.781581, -105.230031], "2": [39.776463, -105.222375], "3": [39.773406, -105.222299], "4": [39.771765, -105.221441], "5": [39.771603, -105.214992], "6": [39.770187, -105.207628], "7": [39.773751, -105.201770], "8": [39.778825, -105.202455], "9": [39.776886, -105.196131], "10": [39.780530, -105.192492], "11": [39.784041, -105.195298], "12": [39.794174, -105.198630], "13": [39.796171, -105.211179], "14": [39.790176, -105.212627], "15": [39.788621, -105.223621], "16": [39.787390, -105.227945], "17": [39.781581, -105.230031]}',
  difficulty: "moderate",
  location: "North Table Mountain Park, Golden, CO, USA",
  length: 8.3,
  description: "TBD",
  estimated_time: 3.25})

trail_12 = Trail.create({title: "North Mount Elbert Trail",
  route_coords: '{"1": [39.151645, -106.412342], "2": [39.118483, -106.445120], "3": [39.151645, -106.412342]}',
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
