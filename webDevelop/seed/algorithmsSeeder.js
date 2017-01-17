var Algorithms = require('../models/algorithms');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var algorithms = [
	new Algorithms({
	index : 1,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 2,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 3,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 4,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 5,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 6,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 7,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 8,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 9,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 10,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 11,
	title : 'Container With Most Water' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 12,
	title : 'Integer to Roman' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 13,
	title : 'Roman to Integer' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 14,
	title : 'Longest Common Prefix' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 15,
	title : '3Sum' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 16,
	title : '3Sum Closest' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 17,
	title : 'Letter Combinations of a Phone Number' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 18,
	title : '4Sum' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 19,
	title: 'Remove Nth Node From End of List',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 20,
	title : 'Valid Parentheses' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),	
	new Algorithms({
	index : 21,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 22,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 23,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 24,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 25,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 26,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 27,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 28,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 29,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 30,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 31,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 32,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 33,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 34,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 35,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 36,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 37,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 38,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 39,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 40,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
		new Algorithms({
	index : 41,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 42,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 43,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 44,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 45,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 46,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 47,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 48,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 49,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 50,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
		new Algorithms({
	index : 51,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 52,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 53,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 54,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 55,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 56,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 57,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 58,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 59,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 60,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
		new Algorithms({
	index : 61,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 62,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 63,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 64,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 65,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 66,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 67,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 68,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 69,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 70,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
		new Algorithms({
	index : 71,
	title : 'Two Sum' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 72,
	title : 'Add Two Numbers' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 73,
	title : 'Longest Substring Without Repeating Characters ' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 74,
	title : 'Median of Two Sorted Arrays' ,
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 75,
	title : 'Longest Palindromic Substring' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 76,
	title : 'ZigZag Conversion' ,
	content: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 77,
	title : 'Reverse Integer' ,
	content: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) Output: 7 -> 0 -> 8',
	difficulty: 'Medium'
	}),
	new Algorithms({
	index : 78,
	title : 'String to Integer (atoi)' ,
	content: 'Given a string, find the length of the longest substring without repeating characters. Examples: Given "abcabcbb", the answer is "abc", which the length is 3. Given "bbbbb", the answer is "b", with the length of 1. Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
	difficulty: 'Hard'
	}),
	new Algorithms({
	index : 79,
	title: 'Palindrome Number',
	content: 'There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Example 1: nums1 = [1, 3] nums2 = [2] The median is 2.0 Example 2: nums1 = [1, 2] nums2 = [3, 4] The median is (2 + 3)/2 = 2.5',
	difficulty: 'Easy'
	}),
	new Algorithms({
	index : 80,
	title : 'Regular Expression Matching' ,
	content: 'Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. Example: Input: "babad" Output: "bab" Note: "aba" is also a valid answer. Example: Input: "cbbd" Output: "bb"',
	difficulty: 'Medium'
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