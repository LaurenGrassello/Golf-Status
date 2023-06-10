# Read and parse scores.json
scores_json = ActiveSupport::JSON.decode(File.read('db/seeds/scores.json'))
scores_json.each do |record|
  Card.create!(record)
end

# Read and parse courses.json
course_json = ActiveSupport::JSON.decode(File.read('db/seeds/courses.json'))
course_json.each do |record|
  Course.create!(record)
end