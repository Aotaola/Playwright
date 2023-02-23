class UserDoc < ApplicationRecord
    belongs_to :user
    belongs_to :doc

    validates :user, presence: true
    validates :doc, presence: true
end
