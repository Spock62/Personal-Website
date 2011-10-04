#!/usr/bin/env ruby

module FetchersHelper
  def projects
    @items.select { |item| item[:kind] == 'project' }
  end

  def playgrounds
    @items.select { |item| item[:kind] == 'playground' }
  end
end
