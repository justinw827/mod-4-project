class Api::V1::UsersController < ApplicationController
  def login
    @user = User.find_by(user_params)
    if !@user
      @user = {username: "", password: ""}
    end

    render json: @user, status: :ok
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

  def videos
    @user = User.find(params[:id])
    @videos = @user.videos
    render json: @videos, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
