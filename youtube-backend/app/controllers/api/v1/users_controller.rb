class Api::V1::UsersController < ApplicationController
  def login
    @user = User.find_by(user_params)
    # byebug
    if !@user
      @user = {username: ""}
    else
      @videos = @user.videos
    end
    render json: {user: @user, videos: @videos}, status: :ok
  end

  def signup
    @user = User.find_by(user_params)

    if @user
      @user = {username: "", password: ""}
    else
      @user = User.create!(user_params)
    end

    render json: @user, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
