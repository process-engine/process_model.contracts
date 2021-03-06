/* eslint-disable @typescript-eslint/no-unused-vars */
import * as activities from './activities/index';
import * as base from './base/index';
import * as bpmnTags from './bpmn_component_tags';
import * as events from './events/index';
import * as gateways from './gateways/index';
import * as globalElements from './global_elements';
import * as processElements from './process/index';

import * as collaboration from './collaboration';
import * as definition from './definitions';
import * as participant from './participant';
import * as process from './process';
import * as xmlns from './xmlns';

export namespace Model {
  export import Activities = activities;
  export import Base = base;
  export import Collaboration = collaboration.Collaboration;
  export import Definitions = definition.Definitions;
  export import Events = events;
  export import Gateways = gateways;
  export import GlobalElements = globalElements;
  export import Participant = participant.Participant;
  export import Process = process.Process;
  export import ProcessElements = processElements;
  export import Xmlns = xmlns.Xmlns;
}

export namespace BpmnTags {
  export import CamundaProperty = bpmnTags.CamundaProperty;
  export import CommonElement = bpmnTags.CommonElement;
  export import GatewayElement = bpmnTags.GatewayElement;
  export import EventElement = bpmnTags.EventElement;
  export import TaskElement = bpmnTags.TaskElement;
  export import FlowElementProperty = bpmnTags.FlowElementProperty;
  export import Lane = bpmnTags.Lane;
  export import LaneProperty = bpmnTags.LaneProperty;
  export import OtherElements = bpmnTags.OtherElements;
  export import XmlnsProperty = bpmnTags.XmlnsProperty;
}

export * from './imodel_parser';
export * from './iparsed_object_model';
