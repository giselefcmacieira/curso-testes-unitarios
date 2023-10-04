import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const order = await createOrder({ client: 'Gisele', description: 'Top0' })
    expect(order).toEqual(expect.objectContaining({
      protocol: expect.any(String),
      status: "IN_PREPARATION"
    })
    );
  });

  it("should return an order based on the protocol", async () => {
    /*     jest
          .spyOn(orderRepository, 'create')
          .mockImplementation((): any => {
            return {
              id: 1,
              client: 'Gisele',
              description: 'Top0',
              protocol: '123456789',
              status: "IN_PREPARATION"
            }
          }) */
    jest
      .spyOn(orderRepository, 'getByProtocol')
      .mockImplementation((): any => {
        return {
          protocol: '123456789',
          status: "IN_PREPARATION"
        }
      })
    const order = await getOrderByProtocol('123456789') //Não encontra a order com esse protocolo
    console.log(order)
    expect(order).toEqual(expect.objectContaining({
      protocol: '123456789',
      status: "IN_PREPARATION"
    })
    )
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    expect(true).toBe(true);
  });
});