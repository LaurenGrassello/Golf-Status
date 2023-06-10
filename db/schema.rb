# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_09_191046) do
  create_table "cards", force: :cascade do |t|
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.integer "holes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "hole_one"
    t.integer "hole_two"
    t.integer "hole_three"
    t.integer "hole_four"
    t.integer "hole_five"
    t.integer "hole_six"
    t.integer "hole_seven"
    t.integer "hole_eight"
    t.integer "hole_nine"
    t.integer "hole_ten"
    t.integer "hole_eleven"
    t.integer "hole_twelve"
    t.integer "hole_thirteen"
    t.integer "hole_fourteen"
    t.integer "hole_seventeen"
    t.integer "hole_eighteen"
    t.string "player_one"
    t.string "player_two"
    t.string "player_three"
    t.integer "p_one_s_one"
    t.integer "p_one_s_two"
    t.integer "p_one_s_three"
    t.integer "p_one_s_four"
    t.integer "p_one_s_five"
    t.integer "p_one_s_six"
    t.integer "p_one_s_seven"
    t.integer "p_one_s_eight"
    t.integer "p_one_s_nine"
    t.integer "p_one_s_ten"
    t.integer "p_one_s_eleven"
    t.integer "p_one_s_twelve"
    t.integer "p_one_s_thirteen"
    t.integer "p_one_s_fourteen"
    t.integer "p_one_s_fifteen"
    t.integer "p_one_s_sixteen"
    t.integer "p_one_s_seventeen"
    t.integer "p_one_s_eighteen"
    t.integer "p_two_s_one"
    t.integer "p_two_s_two"
    t.integer "p_two_s_three"
    t.integer "p_two_s_four"
    t.integer "p_two_s_five"
    t.integer "p_two_s_six"
    t.integer "p_two_s_seven"
    t.integer "p_two_s_eight"
    t.integer "p_two_s_nine"
    t.integer "p_two_s_ten"
    t.integer "p_two_s_eleven"
    t.integer "p_two_s_twelve"
    t.integer "p_two_s_thirteen"
    t.integer "p_two_s_fourteen"
    t.integer "p_two_s_fifteen"
    t.integer "p_two_s_sixteen"
    t.integer "p_two_s_seventeen"
    t.integer "p_two_s_eighteen"
    t.integer "p_three_s_one"
    t.integer "p_three_s_two"
    t.integer "p_three_s_three"
    t.integer "p_three_s_four"
    t.integer "p_three_s_five"
    t.integer "p_three_s_six"
    t.integer "p_three_s_seven"
    t.integer "p_three_s_eight"
    t.integer "p_three_s_nine"
    t.integer "p_three_s_ten"
    t.integer "p_three_s_eleven"
    t.integer "p_three_s_twelve"
    t.integer "p_three_s_thirteen"
    t.integer "p_three_s_fourteen"
    t.integer "p_three_s_fifteen"
    t.integer "p_three_s_sixteen"
    t.integer "p_three_s_seventeen"
    t.integer "p_three_s_eighteen"
  end

end
