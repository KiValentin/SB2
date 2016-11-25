var Skb = require('skb');
var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZTExZDJmYjc0ZDAwMTFiZTgxYTIiLCJ1c2VybmFtZSI6Imtpc3ZheV92YWxlbnRpbkBtYWlsLnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0Nzg2Nzc3Mjl9.KlXElI21aDXIlSEq-4vp14F8kPcFTtZYbcMxzY_Lyik';
var skb = new Skb(token);
skb.taskHelloWorld('hello World');
