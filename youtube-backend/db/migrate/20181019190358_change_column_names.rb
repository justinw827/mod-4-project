class ChangeColumnNames < ActiveRecord::Migration[5.2]
  def change
    change_table :videos do |t|
      t.remove :category, :image_url
      t.rename :url, :video_id
    end
  end
end
