import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server'

const prisma = new PrismaClient();

const typeDefs = `
  type Content {
    info: String
  }

  type Week {
    startDate: String
    mon: String
    tues: String
    wed: String
    thurs: String
    fri: String
    sat: String
    sun: String
  }

  type Text {
    name: String
    content: String
  }

  type Query {
    text(name: String): String
    week(startdate: String): Week
    weeks: [Week]
  }

  type Mutation {
    updateText(name: String, cont: String): String
    addWeek(startdate: String, mon: String, tues: String, wed: String, thurs: String, fri: String, sat: String, sun: String): String
    deleteWeek(startdate: String): String
  }
`;

const resolvers = {
  Query: {
    text: async (ctx:any, data:{name: string}) => {
      const text = await prisma.text.findFirst({
        where: {
          name: data.name
        }})
      if (text) {
        return text.content
      } else {
        return `no text found with name ${data.name}`
      }
    },
    week: async (ctx:any, data:{startdate: string}) => {
      const week = await prisma.week.findFirst({
        where: {
          startDate: data.startdate
        }})
      if (week) {
        return week
      } else {
        return `no week found with startDate ${data.startdate}`
      }
    },
    weeks: async () => {
      const weeks = await prisma.week.findMany({})
      if (weeks) {
        return weeks
      } else {
        return `no weeks found`
      }
    }
  },
  Mutation: {
    updateText: async (ctx:any, data:{name: string, cont: string}) => {
      const updated = await prisma.text.updateMany({
        where: {
          name: data.name
        }, 
        data: {
          content: data.cont
        }
      })
      return "done"
    },
    addWeek: async (ctx:any, 
      data:{
        startdate: string,
        mon: string,
        tues: string,
        wed: string,
        thurs: string,
        fri: string,
        sat: string,
        sun: string
      }) => {
      const add = await prisma.week.create({
        data: {
          startDate: data.startdate,
          mon: data.mon,
          tues: data.tues,
          wed: data.wed,
          thurs: data.thurs,
          fri: data.fri,
          sat: data.sat,
          sun: data.sun
        }
      })
      console.log("done")
      return "done"
    },
    deleteWeek: async (ctx:any, 
      data:{ startdate: string }) => {
      const add = await prisma.week.deleteMany({
        where: {
          startDate: data.startdate
        }
      })
      console.log("done")
      return "done"
    }
  }
};

const server = new ApolloServer({ resolvers, typeDefs });
server.listen({ port: process.env.PORT || 4000 });
