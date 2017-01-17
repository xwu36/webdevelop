var Algorithms = require('../models/algorithms');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var algorithms = [
	new Algorithms({
	index : 1,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].'
	}),
	new Algorithms({
	index : 2,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8'
	}),
	new Algorithms({
	index : 3,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.'
	}),
	new Algorithms({
	index : 4,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5'
	}),
	new Algorithms({
	index : 5,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"'
	})
];

var done = 0;
for (var i = 0; i < algorithms.length; i++){
	algorithms[i].save(function(err, result){
		done++;
		if (done === algorithms.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}