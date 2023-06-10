class Api::CoursesController < ApplicationController
    before_action :set_course, only: %i[show update destroy]


  def index
    @courses = Course.all
    render json: @courses
  end

  def show
    render json: @course
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  def update
    if @course.update(course_params)
      render json: @course, status: :ok
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @course.destroy
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(
      :id,
      :name,
      :holes,
      :player_one,
      :player_two,
      :player_three,
      :p_one_s_one,
      :p_one_s_two,
      :p_one_s_three,
      :p_one_s_four,
      :p_one_s_five,
      :p_one_s_six,
      :p_one_s_seven,
      :p_one_s_eight,
      :p_one_s_nine,
      :p_one_s_ten,
      :p_one_s_eleven,
      :p_one_s_twelve,
      :p_one_s_thirteen,
      :p_one_s_fourteen,
      :p_one_s_fifteen,
      :p_one_s_sixteen,
      :p_one_s_seventeen,
      :p_one_s_eighteen,
      :p_two_s_one,
      :p_two_s_two,
      :p_two_s_three,
      :p_two_s_four,
      :p_two_s_five,
      :p_two_s_six,
      :p_two_s_seven,
      :p_two_s_eight,
      :p_two_s_nine,
      :p_two_s_ten,
      :p_two_s_eleven,
      :p_two_s_twelve,
      :p_two_s_thirteen,
      :p_two_s_fourteen,
      :p_two_s_fifteen,
      :p_two_s_sixteen,
      :p_two_s_seventeen,
      :p_two_s_eighteen,
      :p_three_s_one,
      :p_three_s_two,
      :p_three_s_three,
      :p_three_s_four,
      :p_three_s_five,
      :p_three_s_six,
      :p_three_s_seven,
      :p_three_s_eight,
      :p_three_s_nine,
      :p_three_s_ten,
      :p_three_s_eleven,
      :p_three_s_twelve,
      :p_three_s_thirteen,
      :p_three_s_fourteen,
      :p_three_s_fifteen,
      :p_three_s_sixteen,
      :p_three_s_seventeen,
      :p_three_s_eighteen,
      :created_at,
      :updated_at
    )
  end
end