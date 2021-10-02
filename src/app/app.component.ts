import { Component } from '@angular/core';
import { FormGroup , FormBuilder , FormControl } from '@angular/forms';
import { DynamicFormInputComponent }  from './dynamic-form-input/dynamic-form-input.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterForm!: FormGroup;
  filterFields: any[] = [];
  inputFields: any = {};
  outputJson: any = {};
  typeField: string = "";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inputFields = {
      "section": [
        {
          "name": "Leadership",
          "group": [
            {
              "name": "Founder / CEO Assessment",
              "parameters": [
                {
                  "name": "Value Congruence",
                  "key": "value_congruence",
                  "field_type": "input"
                },
                {
                  "name": "Ability to attract & retain talent",
                  "key": "ability_to_retain_talent",
                  "field_type": "slider"
                },
                {
                  "name": "Clarity of thought",
                  "key": "clarity_of_thought",
                  "field_type": "radio_buttons",
                  "options": [
                    {
                      "label": "Yes",
                      "value": "yes"
                    },
                    {
                      "label": "No",
                      "value": "no"
                    }
                  ]
                },
                {
                  "name": "Execution capability",
                  "key": "execution_capability",
                  "field_type": "slider"
                }
              ]
            }
          ]
        },
        {
          "name": "Exit",
          "group": [
            {
              "name": "IPO",
              "parameters": [
                {
                  "name": "Attractiveness to Public Markets",
                  "key": "attrractiveness_public_market",
                  "field_type": "slider"
                },
                {
                  "name": "Estimated Marketcap on exit? (in US$ Bn)",
                  "key": "estimated_marketcap",
                  "field_type": "input"
                }
              ]
            },
            {
              "name": "Strategic Sale",
              "parameters": [
                {
                  "name": "Keeness of Founder / Management",
                  "key": "founder_keeness",
                  "field_type": "slider"
                },
                {
                  "name": "Easily identifiable list of buyers",
                  "key": "easily_identifiable",
                  "field_type": "slider"
                }
              ]
            },
            {
              "name": "Financial Sponsor",
              "parameters": [
                {
                  "name": "Likelihood of the business continuing to deliver PE returns post TN exit?",
                  "key": "business_likelihood",
                  "field_type": "slider"
                }
              ]
            }
          ]
        }
      ]
    }

    console.log(this.inputFields.section);
  }


  changeItem(newItem: any) {
    this.inputFields.section.forEach((section: any) => {
      section.group.forEach((group: any) => {
        group.parameters.forEach((parameter: any) => {
          if(parameter.key === newItem.key) {
            parameter.value = newItem.value;
          }
        });
      });
    });
  }

  removeProp() {
    this.outputJson = (JSON.parse(JSON.stringify(this.inputFields)));
    this.outputJson.section.forEach((section: any) => {
      section.group.forEach((group: any) => {
        group.parameters.forEach((parameter: any) => {
          delete parameter.name;
          delete parameter.field_type;
          delete parameter.options
        });
      });
    });

    console.log(this.outputJson);
  }

}
