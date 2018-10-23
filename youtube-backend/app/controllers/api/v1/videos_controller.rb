class Api::V1::VideosController < ApplicationController
  def like
    @video = Video.find_or_create_by(video_params)
    @favorite_params = favorite_params
    @favorite_params[:video_id] = @video.id
    @like = Favorite.find_or_create_by(@favorite_params)
    @likes = @video.favorites

    render json: @likes, status: :ok
  end

  def likes
    @video = Video.find_by(video_id: params[:id])

    @likes = {likes: 0}

    if @video
      @likes = {likes: @video.favorites.length}
    end

    render json: @likes, status: :ok
  end

  private
    def video_params
      params.require(:video).permit(:name, :description, :video_id)
    end

    def favorite_params
      params.require(:like).permit(:user_id)
    end
end
