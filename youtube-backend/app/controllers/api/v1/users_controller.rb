class Api::V1::UsersController < ApplicationController
  def login
    @user = User.all.first
    render json: @user, status: :ok
  end

  def videos
    @user = User.find(params[:id])
    @videos = @user.videos
    render json: @videos, status: :ok
  end

end
