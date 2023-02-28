class DocSerializer < ActiveModel::Serializer
    attributes :id, :title, :author, :wordcount, :info, :text, :image_url
  end
  