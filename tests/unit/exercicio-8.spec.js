import { shallowMount } from "@vue/test-utils";
import ExercicioOito from "@/exercicios/exercicio-8.vue";

describe("ExercicioOito.vue", () => {
  it("clica no botão pela classe", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.previous").trigger("click");
  });

  it("clica no botão pra avançar", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.next").trigger("click");

    expect(wrapper.text()).toMatch("Anterior Página atual: 2 Próxima");
  });

  it("clica no botão até chegar na página 5", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.next").trigger("click");

    expect(wrapper.text()).toMatch("Anterior Página atual: 5 Próxima")
  });
  
  it("clica no botão até chegar na página 4 e diminuir uma página", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.next").trigger("click");
    await wrapper.find("button.previous").trigger("click");

    expect(wrapper.text()).toMatch("Anterior Página atual: 3 Próxima")
  });
  
  it("clica no botão previous e não pode ser menor que página 1", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.previous").trigger("click");

    expect(wrapper.text()).toMatch("Anterior Página atual: 1 Próxima")
  });
});
