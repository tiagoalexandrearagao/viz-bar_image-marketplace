/**não remover */
import { options } from "./charts/banner/common/index";
import { css } from "./style/index";
import { head, titleChart } from "./head/index";
/**não remover */

import { banner } from "./charts/banner/index";

looker.plugins.visualizations.add({
  id: "dev-banner-marketplace",
  label: "Banner",
  options: options,
  create: function (element, config) {
    let container = head(element, css);
    return container;
  },

  updateAsync: function (data, element, config, queryResponse, details, done) {
    const params = {
      vis: this,
      config: config,
      data: data,
      queryResponse: queryResponse,
      element: element,
      details: details,
      width: element.clientWidth - margin.left - margin.right,
      height: element.clientHeight - margin.top - margin.bottom,
      margin: {
        top: 170,
        right: config.side_margin,
        bottom: -10,
        left: config.side_margin,
      },
    };

    titleChart(params); //instância do título

    banner(params); //chamar o gráfico para construção passando os parâmetros necessários

    done(); // não remover
  },
});
