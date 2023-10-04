
import { getInfractionsFrom } from "infractions-service";
import * as infractionRepository from '../../src/infractions-repository'
import * as userRepository from '../../src/users-repository'
import * as infractionServices from '../../src/infractions-service'

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    jest
      .spyOn(userRepository, 'getUserByDocument')
      .mockImplementation((): any => {
        return {
          id: 1,
          firstName: 'Gisele',
          lastName: 'Top0',
          licenseId: '123456789'
        }
      })
    jest
      .spyOn(infractionRepository, 'getInfractionsFrom')
      .mockImplementation((): any => {
        return [{
          id: 1,
          date: 'some date',
          description: '123456789',
          cost: 1,
          level: 'some level',
          userId: 1
        },
        {
          id: 2,
          date: 'some date',
          description: '123456789',
          cost: 1,
          level: 'some level',
          userId: 1
        }
        ]
      })
    const infraction = await getInfractionsFrom('123456789')
    expect(infraction).toEqual({
      id: 1,
      firstName: 'Gisele',
      lastName: 'Top0',
      licenseId: '123456789',
      infractions: [{
        id: 1,
        date: 'some date',
        description: '123456789',
        cost: 1,
        level: 'some level',
        userId: 1
      },
      {
        id: 2,
        date: 'some date',
        description: '123456789',
        cost: 1,
        level: 'some level',
        userId: 1
      }]
    });
  });

  it("should throw an error when driver license does not exists", () => {
    jest
      .spyOn(userRepository, 'getUserByDocument')
      .mockImplementation((): any => {
        return undefined
      })
    jest
      .spyOn(infractionRepository, 'getInfractionsFrom')
      .mockImplementation((): any => { })
    const infraction = infractionServices.getInfractionsFrom('123456789')
    expect(infraction).rejects.toEqual({
      type: "NOT_FOUND",
      message: "Driver not found."
    })
  })
});