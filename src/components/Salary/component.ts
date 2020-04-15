import { InputNumber } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';

/**
* Salary
* Component for content salary
*
* @subpackage Vue
* @author Adrian Korzan <adrian.korzan@gmail.com>
*/
@Component({
  components: {
    InputNumber,
  },
})
export default class Salary extends Vue {
  /**
  * @var number
  */
  public salaryValue = 0;
}
