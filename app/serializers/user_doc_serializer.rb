class UserDocSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :doc_id
  belongs_to :doc
    
  end
  